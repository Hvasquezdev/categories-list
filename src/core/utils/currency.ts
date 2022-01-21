const formatter = (params: { format: string; currency: string }): Intl.NumberFormat =>
  new Intl.NumberFormat(params.format, {
    style: "currency",
    currency: params.currency,
    minimumFractionDigits: 0,
  });

export { formatter };
