import { create } from "zustand";

const userId = (set) =>({
userId: 0,
setUserIdKeeper:(id) =>{
    set((state) =>({
        userId: id
    })) 
}
})
const userIdKeeper = create(userId)

export { userIdKeeper } ;


