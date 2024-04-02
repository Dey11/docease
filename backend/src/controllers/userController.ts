

//POST ROUTE : API => api/user/register
const registerUser = async (req: any, res: any, next: any) => {
    res.send("HI REGISTER ROUTE");
}

//=============Login a existing User =======
//POST : api/user/login
const loginUser = async (req: any, res: any, next: any) => {
    res.send("HI Login User ROUTE");
}

export { registerUser,loginUser };