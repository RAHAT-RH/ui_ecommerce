export const getDivisionData = async () => {
    const res = await fetch(`https://wehatbazar.thecell.tech/api/division`, {
        method: "GET",
        headers: {
            "X-Requested-With": "XMLHttpRequest",
            'content-type': "application/json",
            'authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })
    const data = await res.json();
    return data
}