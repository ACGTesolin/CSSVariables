

const inputs = document.querySelectorAll('.controls input');

function handleUpdate(e){

    const suffix =  e.target.dataset.sizing || '';

    document.documentElement.style.setProperty(`--${e.target.name}`, e.target.value + suffix);

    console.log(e.target)
}

inputs.forEach(input => addEventListener('change', handleUpdate));
inputs.forEach(input => addEventListener('mousemove', handleUpdate));
