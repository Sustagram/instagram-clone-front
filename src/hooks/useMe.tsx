import React, { createContext, useContext, useEffect, useState } from 'react';
import Api from '../api';

/* eslint-disable camelcase */

interface Profile {
  readonly user_id: string;
  readonly email: string;
  readonly realname: string;
  readonly username: string;
  readonly created_at: string;
  readonly updated_at: string;
  readonly last_login: string;
  readonly is_superUser: boolean;
}

const context = createContext<Profile | undefined>(undefined);

export const MeProvider: React.FC = ({ children }) => {
  const [profile, setProfile] = useState<Profile | undefined>(undefined);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const res = await Api.get('/api/me/');
        setProfile(res.data.data);
      } catch (e) {
        console.log(e);
      }
    };
    loadProfile();
  }, []);

  return <context.Provider value={profile}>{children}</context.Provider>;
};

export const useMe = () => useContext(context);
