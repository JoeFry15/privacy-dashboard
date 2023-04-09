


export async function fetchLeaksByEmail(): Promise<JSON> {
    const response = await fetch(`https://www.gov.uk/bank-holidays.json`);
    if (!response.ok) {
      throw new Error(await response.json());
    }
    else {
      return await response.json();
    }
  }