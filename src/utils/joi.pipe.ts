import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException as BadRequest,
} from '@nestjs/common';
import { ObjectSchema } from 'joi';

@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor(private schema: ObjectSchema) {}

  transform(value: any, metadata: ArgumentMetadata) {
    const { error } = this.schema.validate(value);

    if (error) {
      // This should return the error message.
      throw new BadRequest('Validation failed.');
    }

    return value;
  }
}
