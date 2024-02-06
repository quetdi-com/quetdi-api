"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorsMapper = void 0;
class ColorsMapper {
    toDomain(record) {
        return {
            id: record.id,
            primary: record.primary_color,
            secondary: record.secondary_color,
        };
    }
    toResponse(entity) {
        return {
            id: entity.id,
            primary: entity.primary,
            secondary: entity.secondary,
        };
    }
    toRequest(entity) {
        return undefined;
    }
}
exports.ColorsMapper = ColorsMapper;
//# sourceMappingURL=colors.mapper.js.map