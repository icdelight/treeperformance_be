"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddGoalsDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class AddGoalsDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: "$property kosong." }),
    __metadata("design:type", String)
], AddGoalsDto.prototype, "issue_goals", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: "$property kosong." }),
    __metadata("design:type", String)
], AddGoalsDto.prototype, "title_goals", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AddGoalsDto.prototype, "desc_goals", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: "$property kosong." }),
    __metadata("design:type", String)
], AddGoalsDto.prototype, "pic_goals", void 0);
__decorate([
    (0, class_validator_1.IsJSON)({ message: "Tipe Goal JSON tidak valid" }),
    __metadata("design:type", Object)
], AddGoalsDto.prototype, "type_goals", void 0);
__decorate([
    (0, class_validator_1.IsJSON)({ message: "Indikator JSON tidak valid" }),
    __metadata("design:type", Object)
], AddGoalsDto.prototype, "indikator", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Date)
], AddGoalsDto.prototype, "start_date", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsNotEmpty)({ message: "$property kosong." }),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Date)
], AddGoalsDto.prototype, "due_date", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)({ message: "$property kosong." }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], AddGoalsDto.prototype, "parent_goals", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Nilai $property tidak valid." }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], AddGoalsDto.prototype, "id_area", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Nilai $property tidak valid." }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], AddGoalsDto.prototype, "id_cluster", void 0);
exports.AddGoalsDto = AddGoalsDto;
//# sourceMappingURL=addgoals.dto.js.map