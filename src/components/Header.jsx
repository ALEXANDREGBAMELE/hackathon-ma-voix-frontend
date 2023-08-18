import { Input, Space } from "antd";
const { Search } = Input;
export default function Header() {
    const onSearch = (value) => console.log(value);
    
    return (
        <div class="header">
            <header>
                <div class="Logo_input">
                    <div class="img_logo">
                        <img src="./05.png" alt="logo" />
                    </div>
                    <Search
                        size="large"
                        allowClear
                        placeholder="input search text"
                        onSearch={onSearch}
                        style={{
                            width: "800px",
                            height: "4rem",
                            alignSelf: "center",
                            marginLeft: "5rem",
                            backgroundColor: "#F1F125",
                        }}
                    />
                </div>
            </header>
            <nav class="icons">
                <i class="fa fa-bell" aria-hidden="true"></i>
                <div className="userAvatar">
                    <p>yacou</p>
                    <img
                        src="https://images.unsplash.com/photo-1517598024396-46c53fb391a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
                        alt=""
                    />
                </div>
            </nav>
        </div>
    );
}
