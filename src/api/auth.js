import useAxiosPublic from "../hooks/useAxiosPublic.jsx"

export const SaveUser = async user => {
    const axiosPublic = useAxiosPublic()
    const currentUser = {
        email: user.email,
        role: 'normal',
        status: 'Verified'
    }
    const {data} = await axiosPublic.put(`/users/${user?.email}`, currentUser)
    return data;
}

export const GetRole = async(email) => {
    const axiosPublic = useAxiosPublic()
    const {data} = await axiosPublic(`/users/${email}`)
    return data.role;
}