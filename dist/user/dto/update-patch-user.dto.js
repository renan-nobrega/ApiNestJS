"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePacthUserDTO = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_user_dto_1 = require("./create-user.dto");
class UpdatePacthUserDTO extends (0, mapped_types_1.PartialType)(create_user_dto_1.CreateUserDTO) {
}
exports.UpdatePacthUserDTO = UpdatePacthUserDTO;
//# sourceMappingURL=update-patch-user.dto.js.map