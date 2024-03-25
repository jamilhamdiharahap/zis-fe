import instance from "../plugins/axios";


export async function loginAuthService(payload){
    try{
        const {data} = await instance.post("api/v1/login", payload);
        return data;
    }catch(err){
        return err;
    }
}

export async function getMenuService(paramId){
    try{
        const {data} = await instance.get(`api/v1/menu?roleId=${paramId}`);
        return data;
    }catch(err){
        return err;
    }
}