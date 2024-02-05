## Class based Component

*Three important lifecycle methods*

1. ComponentDidMount
2. ComponentUpdate
3. ComponentWillUnmount

No need to to uderstand this method now you can use **useEffect** hook

### Different variations of useEffect

Syntex for every renderer

```javascript
useEffect( () =>{

});
```

Syntex for first time renderer

```javascript
useEffect( () =>{

}, []);
```

Syntex for first time renderer + contidion

```javascript
useEffect( () =>{
    // jab bhi name ka value chane hoga tab chalega
}, [name]); //iss array ko dependencie list and 'name' ko dependencie bolte hai
```

*jab bhi dependencie ki value change hogi tabhi callback function execute hoga*

**Important**

```javascript
useEffect( () =>{
    // last
    return (
        // first 
    )
});
```
