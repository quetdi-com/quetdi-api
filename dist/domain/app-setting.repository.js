"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppSettingRepository = void 0;
class AppSettingRepository {
    constructor(supabase, colorsMapper) {
        this.supabase = supabase;
        this.colorsMapper = colorsMapper;
    }
    async getColors() {
        await this.supabase.instance().auth.setSession({
            refresh_token: "MTMVHW6HRjuSNFkBrO0Hxw",
            access_token: "eyJhbGciOiJIUzI1NiIsImtpZCI6Ik9yNU1TanNXL1BrTWt4UW4iLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzA4OTQxMTEwLCJpYXQiOjE3MDgzMzYzMTAsImlzcyI6Imh0dHBzOi8vZW9nbXNuaHR6YnRkbWtjb213bmkuc3VwYWJhc2UuY28vYXV0aC92MSIsInN1YiI6IjJiZGI0ODUwLTk1YjEtNGMwNS04MTg4LTA0MWE3MzA0ZWYwOCIsImVtYWlsIjoiZHVjZHV5LmRldkBnbWFpbC5jb20iLCJwaG9uZSI6IiIsImFwcF9tZXRhZGF0YSI6eyJwcm92aWRlciI6Imdvb2dsZSIsInByb3ZpZGVycyI6WyJnb29nbGUiXX0sInVzZXJfbWV0YWRhdGEiOnsiYXZhdGFyX3VybCI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0pFQ1J6VUhzc3FQb3RNczI3UlJ1UHAtM2hnYm5hRVBuMndWSDZ3dzFfVC1nQ2c9czk2LWMiLCJlbWFpbCI6ImR1Y2R1eS5kZXZAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZ1bGxfbmFtZSI6IkR1eSBNYWkgxJDhu6ljIiwiaXNzIjoiaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tIiwibmFtZSI6IkR1eSBNYWkgxJDhu6ljIiwicGhvbmVfdmVyaWZpZWQiOmZhbHNlLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jSkVDUnpVSHNzcVBvdE1zMjdSUnVQcC0zaGdibmFFUG4yd1ZINnd3MV9ULWdDZz1zOTYtYyIsInByb3ZpZGVyX2lkIjoiMTA4NzAxNTI4NjU2NDU0MjE4OTU5Iiwic3ViIjoiMTA4NzAxNTI4NjU2NDU0MjE4OTU5In0sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoib2F1dGgiLCJ0aW1lc3RhbXAiOjE3MDgzMzYzMTB9XSwic2Vzc2lvbl9pZCI6ImM4NmI5YjI5LTYzZjAtNGZiYS05YTUyLTc0Y2RjZTI5MTkyMiJ9.kwCze-QjPM7-D_DH3YkIgwY-aNRdj8xSR12MJUZ15Qo"
        });
        let { data, error } = (await this.supabase.instance().from('colors').select('*'));
        if (error) {
            throw error.message;
        }
        return data.map((item) => this.colorsMapper.toDomain(item));
    }
}
exports.AppSettingRepository = AppSettingRepository;
//# sourceMappingURL=app-setting.repository.js.map