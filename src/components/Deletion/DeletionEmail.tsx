interface deletionEmailProps {
    account: string,
}

export function DeletionEmail({account} : deletionEmailProps): JSX.Element {

    const emails = ["test@test.com", "test2@test.com"]
    const phoneNumbers = ["0123456789"]
    const fullName = "Test McTest"
    const usernames = ["Test12"]

    return <div>
        <h3>Deletion Email for {account}:</h3>
        <p>
            To whom it may concern,<br></br>
            <br></br>
            In accordance with Article 17 of the European General Data Protection Regulation, please proceed to the erasure of my personal data without undue delay.
            <br></br>
            - Account information, including my name, date of birth, e-mail address, billing/shipping address, phone number, and stored payment card data.<br></br>
            - User-generated content, which may include things such as photos, tracked activities, statistics, comments, or messages.<br></br>
            - Store or Site Data, which may include information on past orders, product reviews, comments in forums, comments on website content.<br></br>
            - Customer Service Contacts, if I have contacted customer service in the past to resolve any issues, any contact history.<br></br>
            - Marketing tracking or behavior data, which may include things such as open and click rate, website user behavior, browser user agent, user preferences, inferred user behavior, etc.<br></br>
            <br></br>
            Accounts may be associated with the following login credentials.<br></br>
            <br></br>
            Email addresses: {emails.map(i => <p>{i}</p>)}
            Phone number: <p>{phoneNumbers}</p>
            User names: <p>{usernames}</p>
            <br></br>
            Please confirm when this operation has been completed.<br></br>
            <br></br>
            Yours sincerely,<br></br>
            {fullName}
        </p>
    </div>
}