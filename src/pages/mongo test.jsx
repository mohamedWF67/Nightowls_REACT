
import purplecentered from "../modifers/purplecentered.jsx";
import {useEffect, useState} from "react";
import {databases} from "../appwrite/config.js";
function Testpage() {

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        init();
    },[]);

    const init = async () => {
        const response= await databases().listDocuments(
            '676b04a70003f620ab12',
            'notes',
        );
        setNotes(response.documents);
    }
    document.title = "testing";
    purplecentered();
    return (
        <>
            <div>
                <div>my notes</div>
                {notes.map((note,index) => (
                    <div key={index}>
                        {note.body}
                    </div>
                ))}
            </div>
        </>
    );

}

export default Testpage
