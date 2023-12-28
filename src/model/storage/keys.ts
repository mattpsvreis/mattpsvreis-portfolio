const { VITE_APP_PREFIX } = import.meta.env;

type LocalStorageKeysProps = {
  token: string;
  adminToken: string;
  user: string;
};

type SessionStorageKeysProps = {
  registerFlow: string;
  timestamp: string;
};

const LocalStorageKeys: LocalStorageKeysProps = {
  token: `@${VITE_APP_PREFIX}:token`,
  adminToken: `@${VITE_APP_PREFIX}:admin-token`,
  user: `@${VITE_APP_PREFIX}:user`,
};

const SessionStorageKeys: SessionStorageKeysProps = {
  registerFlow: `@${VITE_APP_PREFIX}:register-flow`,
  timestamp: `@${VITE_APP_PREFIX}:countdown`,
};

export { LocalStorageKeys, SessionStorageKeys };
