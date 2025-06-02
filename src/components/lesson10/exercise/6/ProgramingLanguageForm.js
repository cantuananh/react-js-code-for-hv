import { useState } from "react";

function ProgramingLanguageForm() {
    const [formData, setFormData] = useState({
        studentName: "",
        email: "",
        age: "",
        courses: []
    });

    const languages = ["PHP", "Java", "Python", "Javascript", "Typescript", "React JS"];

    const [errors, setErrors] = useState({});

    const handleOnChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (name === "courses" && type === "checkbox") {
            const updatedCourses = checked
                ? [value, ...formData.courses]
                : formData.courses.filter(item => item !== value)

            setFormData((previosFormData) => ({ ...previosFormData, courses: updatedCourses }));
        } else {
            setFormData((previosFormData) => ({ ...previosFormData, [name]: value }));
        }
    }

    const submitForm = (e) => {
        e.preventDefault();

        const newErrors = validate();

        if(Object.keys(newErrors).length > 0){
            setErrors(newErrors);
        } else {
            setErrors({});
            console.log("Đăng ký thành công: ", formData);
        }

        
    }

    function validate() {
        const newErrors = {};

        if (!formData.studentName.trim()) newErrors.studentName = "Trường tên học sinh không được để trống";
        if (!formData.email.trim()) newErrors.email = "Trường email không được để trống";
        if (!formData.age) {
            newErrors.age = "Tuổi không được để trống";
        } else if (formData.age > 14) {
            newErrors.age = "Tuổi phải nhỏ hơn 14";
        } else if(isNaN(formData.age)) {
            newErrors.age = "Tuổi phải là một số";
        }
        
        if(formData.courses.length === 0) {
            newErrors.courses = "Vui lòng chọn ít nhất một khoá học";
        }

        return newErrors;
    }

    return (
        <div>
            <h1>Form đăng ký lớp học lập trình</h1>
            <form onSubmit={submitForm}>
                <div>
                    <label>Tên học sinh: </label>
                    <input
                        name="studentName"
                        type="text"
                        placeholder="Nhập tên học sinh..."
                        value={formData.studentName}
                        onChange={handleOnChange}
                    />
                    {errors.studentName && <p style={{color: "red"}}>{errors.studentName}</p>}
                </div>
                <br />
                <div>
                    <label>Tên email: </label>
                    <input
                        name="email"
                        type="email"
                        placeholder="Nhập email..."
                        value={formData.email}
                        onChange={handleOnChange}
                    />
                    {errors.email && <p style={{color: "red"}}>{errors.email}</p>}
                </div>
                <br />
                <div>
                    <label>Tên tuổi: </label>
                    <input
                        name="age"
                        type="number"
                        placeholder="Nhập tuổi..."
                        value={formData.age}
                        onChange={handleOnChange}
                    />
                    {errors.age && <p style={{color: "red"}}>{errors.age}</p>}
                </div>
                <br />
                <div>
                    {
                        languages.map((language) => (
                            <label style={{ marginRight: "10px" }} key={language}>
                                <input
                                    type="checkbox"
                                    name="courses"
                                    value={language}
                                    checked={formData.courses.includes(language)}
                                    onChange={handleOnChange}
                                />
                                {language}
                            </label>
                        ))
                    }
                    {errors.courses && <p style={{color: "red"}}>{errors.courses}</p>}
                </div>
                <br />

                <button type="submit">Đăng ký</button>
            </form>
        </div>
    );
}

export default ProgramingLanguageForm;