function pricing() {
  // consts
  const plans = [
    {
      title: 'Basic',
      monthly: 19.99,
      annualy: 199.99,
      features: {
        storage: '500 GB',
        users: 2,
        upload: '3 GB',
      },
    },
    {
      title: 'Professional',
      monthly: 24.99,
      annualy: 249.99,
      features: {
        storage: '1 TB',
        users: 5,
        upload: '10 GB',
      },
    },
    {
      title: 'Master',
      monthly: 39.99,
      annualy: 399.99,
      features: {
        storage: '2 TB',
        users: 10,
        upload: '20 GB',
      },
    },
  ]
  const refkeys = plans.map(({ title }) => title)

  // functions
  const togglePrices = (refs, isMonthly) => {
    refkeys.forEach((key, index) => {
      const { monthly, annualy } = plans[index]
      const increment = isMonthly ? 1 : -1
      const [from, to] = isMonthly ? [monthly, annualy] : [annualy, monthly]
      let currentValue = from

      const intervalId = setInterval(() => {
        currentValue += increment
        refs[key].textContent = currentValue.toFixed(2)

        const shouldStop = isMonthly
          ? currentValue >= to
          : currentValue <= to + 1
        shouldStop && clearInterval(intervalId)
      }, 1)
    })
  }

  // data return
  return {
    monthly: true,
    plans,
    init(refs) {
      refkeys.forEach((key, index) => {
        refs[key].textContent = this.plans[index].monthly
      })
    },
    setToMonthlyPlan(refs) {
      if (this.monthly) return
      togglePrices(refs, this.monthly)
      this.monthly = true
    },
    setToAnnualyPlan(refs) {
      if (!this.monthly) return
      togglePrices(refs, this.monthly)
      this.monthly = false
    },
    togglePlan(refs) {
      togglePrices(refs, this.monthly)
      this.monthly = !this.monthly
    },
    isMonthly() {
      return this.monthly
    },
  }
}
