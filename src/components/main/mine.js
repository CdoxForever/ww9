import { getUser } from "../../api/api-handlers";

export const user = async () => {
   const userName = document.getElementById('firstname')
   const usersecondName = document.getElementById('secondname')
    await getUser().then(a => console.log(a));
    avatqar.size.widht = 
}

