import { hashPassword } from "./shared/util";

const run = async ()=>{
    const password = await hashPassword('admin')
    console.log(password);
}

run();