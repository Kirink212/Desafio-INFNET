import React, { useEffect } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { fetchSubjects } from '../../actions/subjects';

// Material UI
import { Card, CardContent, Divider, List, ListItem, ListItemText, Typography } from "@material-ui/core";

const SubjectList = () => {
    const subjects = useSelector((state: any) => state.subjects);
    const token = localStorage.getItem('token');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSubjects());
    }, [dispatch]);

    const showSubjects = () => {
        if (token) {
            return <Card>
                <CardContent>
                    <Typography variant="h4"> Subjects List </Typography>
                    {/* <ul>
                        {subjects.map((subject: any) => <li key={subject.id}>{subject.description}</li>)}
                    </ul> */}
                    <List>
                        {
                            subjects.map((subject: any) => (
                                <>
                                    <ListItem key={subject.id}>
                                        <ListItemText primary={subject.description} />
                                    </ListItem>
                                    <Divider />
                                </>
                            ))
                        }
                    </List>
                </CardContent>
            </Card>;
        }

        return <Typography variant="h4"> You're not allowed to see the subjects! </Typography>
    }

    return showSubjects();
}

export default SubjectList;