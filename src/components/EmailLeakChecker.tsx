import { useEffect, useState } from "react";
import { fetchLeaksByEmail } from "../clients/apiClient";

type LeakData = {
    [key: string]: {
      events: {
        title: string;
        date: string;
        notes: string;
      }[];
    };
  };

export function EmailLeakChecker(): JSX.Element {

    const [leaks, setLeaks] = useState<LeakData | undefined>();
    
    useEffect(() => {
        fetchLeaksByEmail()
            .then(data => setLeaks(data));
    }, [])

    if (!leaks) return <p>Waiting for data</p>

    const ourLeaks : JSX.Element[] = [];

    leaks["england-and-wales"].events.forEach(element => {
        ourLeaks.push(
            <p>{element.title}, {element.date}{element.notes ? ", " + element.notes : ""}</p>
        )
    });

    console.log(ourLeaks);

    return <div>
        {ourLeaks}
        </div>;
}