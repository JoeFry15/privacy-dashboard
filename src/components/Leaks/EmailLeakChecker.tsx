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
        <h1>Account leaks</h1>
        <h4>See a list of known leaks of your data</h4>
        <table>{ourLeaks}</table>
    </div>;
}