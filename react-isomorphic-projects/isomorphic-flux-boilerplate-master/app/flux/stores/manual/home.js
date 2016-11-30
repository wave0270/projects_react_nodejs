class HomeStore {

  constructor() {
    this.bindActions(this.alt.getActions('home'))

    this.collection = []
    this.error = null
  }


  onIndexSuccess(home: Object[]) {
    this.collection = home
    this.error = null
  }

  onIndexFail({ error }: { error: ?Object }) {
    this.error = error
  }

  onShowSuccess(home: { seed: string }) {
    const index = this.collection
      .findIndex(({ seed }) => seed === home.seed)

    if (index > -1) {
      this.collection = this.collection
        .map((u, idx) => idx === index ? home : u)
    } else {
      this.collection = [ ...this.collection, home ]
    }

    this.error = null
  }

  onShowFail({ error }: { error: ?Object }) {
    this.error = error
  }

  onRemove(index: number) {
    this.collection = this.collection
      .filter((user, idx) => idx !== index)
  }

}

export default HomeStore
