import { useEffect, useState } from "react";
import { leaksData, fetchSampleLeaksByEmail } from "../../clients/apiClient";


export function EmailLeakChecker(): JSX.Element {

    const [leaks, setLeaks] = useState<leaksData[] | undefined>();
    
    useEffect(() => {
        fetchSampleLeaksByEmail()
            .then(data => setLeaks(data));
    }, [])

    if (!leaks) return <p>Waiting for data</p>

    const ourLeaks : JSX.Element[] = [<tr><td>Name</td><td>Title</td><td>Domain</td><td>Breach Date</td></tr>];

    leaks.forEach(element => {
        ourLeaks.push(
            <tr><td>{element.Name}</td><td>{element.Title}</td><td>{element.Domain}</td><td>{element.BreachDate}</td></tr>
        )
    });

    return <div>
        <h2>List of account leaks</h2>
        <table>{ourLeaks}</table>
    </div>;
}