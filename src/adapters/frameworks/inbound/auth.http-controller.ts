import { SupabaseDataSource } from '../database/supabase';

export class AuthHttpController {

  private readonly supabase: SupabaseDataSource;


  constructor(supabase: SupabaseDataSource) {
    this.supabase = supabase;
  }

  login = async (req, res, next): Promise<void> => {
    let { idToken } = req.body;
    let auth = await this.supabase.instance().auth.signInWithIdToken({
      provider: 'google', token: idToken,
    });

    try {
      res.json({ auth })
    } catch (e) {
      next(e);
    }
  }
}
