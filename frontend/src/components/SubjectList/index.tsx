import React, { Component } from "react";

interface Subject {
    id: string;
    description: string;
};

interface Props {
    subjects: Subject[];
}

class SubjectList extends Component<Props> {
    render() {
        const subjects = this.props;
        
        return (
            <ul>
                {/* {subjects.map(subject => <li>{subject.name}</li>)} */}
            </ul>
        );
    }
}

export default SubjectList;