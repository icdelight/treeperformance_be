"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoalsModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const goals_controller_1 = require("./goals.controller");
const goals_service_1 = require("./goals.service");
const strategy_1 = require("../auth/strategy");
const goals_repository_1 = require("./goals.repository");
let GoalsModule = class GoalsModule {
};
GoalsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.register({}),
        ],
        controllers: [goals_controller_1.GoalsController],
        providers: [goals_service_1.GoalsService, goals_repository_1.GoalRepository, strategy_1.JwtStrategy],
    })
], GoalsModule);
exports.GoalsModule = GoalsModule;
//# sourceMappingURL=goals.module.js.map