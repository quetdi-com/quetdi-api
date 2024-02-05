"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthHttpController = void 0;
class AuthHttpController {
    constructor(supabase) {
        this.login = async (req, res, next) => {
            let { idToken } = req.body;
            let auth = await this.supabase.instance().auth.signInWithIdToken({
                provider: 'google', token: idToken,
            });
            try {
                res.json({ auth });
            }
            catch (e) {
                next(e);
            }
        };
        this.supabase = supabase;
    }
}
exports.AuthHttpController = AuthHttpController;
//# sourceMappingURL=auth.http-controller.js.map