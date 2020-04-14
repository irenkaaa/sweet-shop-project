
function getAuthHeader () {

    const token = localStorage.getItem('token');

    return (token && token.length)
        ? {'Authorization' : `Bearer ${token}`} 
        : {};
}



export default getAuthHeader();
