import { registerAs } from '@nestjs/config';

export default registerAs(
  'swagger',
  (): Record<string, any> => ({
    config: {
      info: {
        title: 'Canvas Aggregation Auth',
      },
      swaggerUI: true,
      documentationPath: '/whatsapp/docs',
    },
    options: {
      apisSorter: 'alpha',
      tagsSorter: 'alpha',
      operationsSorter: 'alpha',
    },
  }),
);
