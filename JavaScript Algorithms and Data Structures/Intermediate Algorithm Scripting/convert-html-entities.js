function convertHTML(str) {
    
    let splited = [];

    const entities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;",
    }

    const unallowedItems = ['&', '<', '>', '"', "'"];

    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        
        if (unallowedItems.includes(element)){
            splited.push(entities[element]);
        } else {
            splited.push(element);
        }
    }

    return splited.join('');

}



// should return the string Dolce &amp; Gabbana.
console.log(convertHTML("Dolce & Gabbana"));

// should return the string Hamburgers &lt; Pizza &lt; Tacos.
console.log(convertHTML("Hamburgers < Pizza < Tacos"));

// should return the string Sixty &gt; twelve.
console.log(convertHTML("Sixty > twelve"));

// should return the string Stuff in &quot;quotation marks&quot;.
console.log(convertHTML('Stuff in "quotation marks"'));

// should return the string Schindler&apos;s List.
console.log(convertHTML("Schindler's List"));

// should return the string &lt;&gt;.
console.log(convertHTML("<>"));

// should return the string abc.
console.log(convertHTML("abc"));