function EmailInput({email, onChangeEmail}) {
    return(
        <input type="email"
            value={email}
            placeholder="Nhập email của bạn..."
            onChange={(e) => onChangeEmail(e.target.value)}></input>
    );

}

export default EmailInput;