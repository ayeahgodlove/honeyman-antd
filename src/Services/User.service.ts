import { User } from "Models/User";
import { requestType } from "Services";

export const UserService = {
    list: (): Promise<any> => requestType.get("/api/v1/authorized")
}