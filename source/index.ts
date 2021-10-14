import { SHA1 } from "bcrypto";

export const hash = (content: Buffer | string | Buffer[]): Buffer => {
  if (Array.isArray(content)) {
    let sha1 = SHA1.ctx;

    sha1.init();

    for (const element of content) {
      sha1 = sha1.update(element);
    }

    return sha1.final();
  }

  return SHA1.digest(
    content instanceof Buffer ? content : Buffer.from(content),
  );
};
