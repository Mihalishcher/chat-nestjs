import { ConflictException } from '@nestjs/common';

export class EmailOrNameExist extends ConflictException {
  constructor(field: string) {
    super(`User already exists, with same ${field}...`);
  }
}

export default EmailOrNameExist;
