import { useEffect, useState } from "react";
import { leaksData, fetchSampleLeaksByEmail } from "../clients/apiClient";


export function EmailLeakChecker(): JSX.Element {

    const [leaks, setLeaks] = useState<leaksData[] | undefined>();
    
    useEffect(() => {
        fetchSampleLeaksByEmail()
            .then(data => setLeaks(data));
    }, [])

    if (!leaks) return <p>Waiting for data</p>

    const ourLeaks : JSX.Element[] = [];

    leaks.forEach(element => {
        ourLeaks.push(
            <p>{element.Name}, {element.Title}, {element.Domain}</p>
        )
    });

    return <div>
        {ourLeaks}
        </div>;
}