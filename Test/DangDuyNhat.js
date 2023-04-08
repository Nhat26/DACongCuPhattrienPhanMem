
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NhanVien from '../../ChiNhanh/QuanLyNhanVien';

describe('NhanVien', () => {
  it('should submit the form with the employee data', () => {
    const onSubmit = jest.fn();
    const { getByLabelText, getByText } = render(
      <NhanVien onSubmit={onSubmit} />
    );

    fireEvent.change(getByLabelText('Name'), { target: { value: 'Nhat' } });
    fireEvent.change(getByLabelText('sdt'), { target: { value: '0353830837' } });
    fireEvent.click(getByText('Submit'));

    expect(onSubmit).toHaveBeenCalledWith({
      name: 'Nhat',
      sdt: 0353830837,
    });
  });
});