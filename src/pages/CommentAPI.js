import React from "react";
import Axios from "axios";
import { useState, useEffect } from "react";
import { Container, Form, Button, Table, CloseButton } from "react-bootstrap";

const CommentAPI = () => {
    const [allData, setAllData] = useState([]);
    const [comment, setComment] = useState("");
    const [name, setName] = useState("");

    const URL = "http://localhost:5000/api/comment";

    const getData = async () => {
        try {
            await Axios.get(URL).then((getData) => {
                setAllData(getData.data);
                console.log(getData.data.length);
            });
        } catch (error) {
            console.log(error);
        }
    };
    // =============================================
    // To load the data right when the website loads
    // =============================================

    useEffect(() => {
        getData();
        // keep [] empty for data to load with the page
    }, []);
    // =======================
    //         CREATE
    // =======================
    const addComment = async () => {
        try {
            await Axios.post(URL, {
                comment,
                name,
            });
            getData();
        } catch (error) {
            console.log(error);
        }
    };

    // =======================
    //         DELETE
    // =======================
    const deleteItem = async (id) => {
        try {
            await Axios.delete(URL + id);
            getData();
        } catch (err) {
            console.log(err);
        }
    };
    const handleDelete = (id) => {
        deleteItem(id);
    };
    return (
        <Container>
            <h1>Comments Page</h1>
            <Form>
                <Form.Control
                    type="comment"
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Enter the feedback"
                />
                <Form.Control
                    type="name"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                />
                <Button variant="primary" onClick={addComment}>
                    Submit
                </Button>
            </Form>
            <Table>
                {allData.map((data) => {
                    return (
                        <>
                            <tbody>
                                <tr>
                                    <td colSpan={3}>{data.comment}</td>
                                    <td>{data.name}</td>
                                    <td>
                                        <CloseButton
                                            onClick={() =>
                                                handleDelete(`/${data._id}`)
                                            }
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </>
                    );
                })}
            </Table>
        </Container>
    );
};

export default CommentAPI;
