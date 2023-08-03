require('dotenv').config()

const main = () => {
  console.log(`Saying hello from the "${process.env.BRANCH_NAME}]" branch!`)
}

main()
