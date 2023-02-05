import request from 'supertest';
import App from '../app';
import AdminAuthRoute from '../routes/admin.route';

afterAll(async () => {
    await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
  });

describe('Department endpoints', () => {
  it('should create a new department', async () => {
    const authRoute = new AdminAuthRoute();
      const app = new App([authRoute]);
    const res = await request(app.getServer())
      .post(`${authRoute.path}departments`)
      .send({
        name: 'Human Resources'
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
  });

  it('should retrieve a list of all departments', async () => {
    const authRoute = new AdminAuthRoute();
      const app = new App([authRoute]);
    const res = await request(app.getServer()).get(`${authRoute.path}departments`);
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should retrieve a department by ID', async () => {
    const authRoute = new AdminAuthRoute();
      const app = new App([authRoute]);
    const res = await request(app.getServer()).get(`${authRoute.path}departments/1`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id');
  });

  it('should update a department', async () => {
    const authRoute = new AdminAuthRoute();
      const app = new App([authRoute]);
    const res = await request(app.getServer())
      .put(`${authRoute.path}departments/1`)
      .send({
        name: 'HR'
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body)
    });
});
