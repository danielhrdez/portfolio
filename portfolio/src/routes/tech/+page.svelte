<script lang="ts">
  import Block from '$lib/components/Block.svelte';
  import SubBlock from '$lib/components/SubBlock.svelte';
  import Slideshow from '$lib/components/Slideshow.svelte';
  import type { BadgeLink } from "$lib/types";

  const frameworks = {
    'tensorflow': 'https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=for-the-badge&logo=TensorFlow&logoColor=white',
    'pytorch': 'https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style=for-the-badge&logo=PyTorch&logoColor=white',
    'react': 'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB',
    'svelte': 'https://img.shields.io/badge/svelte-%23f1413d.svg?style=for-the-badge&logo=svelte&logoColor=white',
    'tailwind': 'https://img.shields.io/badge/tailwind-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white',
    'sass': 'https://img.shields.io/badge/Sass-%23CC6699.svg?style=for-the-badge&logo=sass&logoColor=white',
    'flask': 'https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white',
  };
  
  const programmingLanguages: BadgeLink[] = [
    {
      'name': 'Python',
      'src': 'https://img.shields.io/badge/Python-%2314354C.svg?style=for-the-badge&logo=python&logoColor=white'
    },
    {
      'name': 'JavaScript',
      'src': 'https://img.shields.io/badge/JavaScript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E'
    },
    {
      'name': 'TypeScript',
      'src': 'https://img.shields.io/badge/TypeScript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white'
    },
    {
      'name': 'Java',
      'src': 'https://img.shields.io/badge/Java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white'
    },
    {
      'name': 'C/C++',
      'src': 'https://img.shields.io/badge/C%2FC%2B%2B-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white'
    },
    {
      'name': 'Rust',
      'src': 'https://img.shields.io/badge/Rust-%23000000.svg?style=for-the-badge&logo=rust&logoColor=white'
    },
    {
      'name': 'C#',
      'src': 'https://img.shields.io/badge/C%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white'
    },
    {
      'name': 'HTML',
      'src': 'https://img.shields.io/badge/HTML-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white'
    },
    {
      'name': 'CSS',
      'src': 'https://img.shields.io/badge/CSS-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white'
    },
    {
      'name': 'SQL',
      'src': 'https://img.shields.io/badge/SQL-%2300f.svg?style=for-the-badge&logo=sqlite&logoColor=white'
    },
    {
      'name': 'Git',
      'src': 'https://img.shields.io/badge/Git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white'
    },
    {
      'name': 'Bash',
      'src': 'https://img.shields.io/badge/Bash-%23121011.svg?style=for-the-badge&logo=gnu-bash&logoColor=white'
    },
  ];
</script>

<Block title="Tech Stack">
  <Block title="" subtitle="Programming Languages">
    <Slideshow images={programmingLanguages} />
  </Block>
  <br>
  <br>
  <Block title="" subtitle="Frameworks by Field">
    <SubBlock title="Deep Learning">
      <img src={frameworks.tensorflow} alt="TensorFlow">
      <img src={frameworks.pytorch} alt="PyTorch">
    </SubBlock>
    <SubBlock title="Frontend">
      <img src={frameworks.react} alt="React">
      <img src={frameworks.svelte} alt="Svelte">
      <img src={frameworks.tailwind} alt="Tailwind">
      <img src={frameworks.sass} alt="Sass">
    </SubBlock>
    <SubBlock title="Backend">
      <img src={frameworks.flask} alt="Flask">
    </SubBlock>
  </Block>
</Block>
