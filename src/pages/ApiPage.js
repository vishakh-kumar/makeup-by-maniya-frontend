import React from "react";

const ApiPage = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <div>
            <form>
                <input type="comment" placeholder="Enter the feedback" />
                <input type="name" placeholder="Name" />
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
};

export default ApiPage;
