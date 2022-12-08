import { IsEnum, IsNotEmpty } from "class-validator";
import { Role } from "src/common/constants/role.constant.ts";

export class ProfileRoleDto {
    @IsNotEmpty()
    @IsEnum(Role)
    role: Role;
}