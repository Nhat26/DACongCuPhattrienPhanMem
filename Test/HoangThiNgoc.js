describe('Đăng nhập', () => {
  it('Trả về mã 401 khi không có tên người dùng hoặc mật khẩu', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({
        username: '',
        password: '',
      });
    expect(res.status).toBe(401);
  });

  it('Trả về mã 401 khi tên người dùng hoặc mật khẩu không đúng', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({
        username: 'admin',
        password: '123456',
      });
    expect(res.status).toBe(401);
  });

  it('Trả về mã 200 và mã thông báo JWT hợp lệ khi tên người dùng và mật khẩu đúng', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({
        username: 'admin',
        password: 'admin',
      });
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('token');
  });
});