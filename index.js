import Github from './lib/github';

let gh = new Github();

async function foo() {
  let repos = await fetch('https://api.github.com/users/zzarcon/repos?sort=created&type=owner&direction=desc&page=4');

  console.log(repos)
}

foo();