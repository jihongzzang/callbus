import { rest } from 'msw';

interface TestBodyType {
  id?: number | string;
  name: number | string;
}

export const handlers = [
  rest.get<TestBodyType>('/api/users', async (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: '1',
          name: 'jihong',
        },
      ]),
    );

    // return res(ctx.status(400));
  }),
  rest.get<TestBodyType>(
    'http://localhost:3000/api/user/:userId',
    async (req, res, ctx) => {
      const { userId } = req.params;
      return res(
        ctx.json({
          name: `jihong(${userId})`,
        }),
      );

      // return res(ctx.status(400));
    },
  ),
];
