import { useEffect, useRef, useState } from "react"

export const useFecth = (url) => {

    const isMounted = useRef(true);

    const [state, setstate] = useState({data: null, loading: true, error: null});

    useEffect(() => {
        // esto se ejecuta cuando se desmonta
        return () => {
            isMounted.current = false;
        }
    },[]);

    useEffect(() => {

        setstate({data: null, loading: true, error: null})

        fetch(url)
            .then(resp => resp.json())
            .then(data => {

                /* setTimeout(() => {

                    if(isMounted.current) {
                        setstate({
                            loading: false,
                            error: null, 
                            data
                        });
                    } else {
                        console.log('setState no se llamó');
                    }

                }, 4000); */

                if(isMounted.current) {
                    setstate({
                        loading: false,
                        error: null, 
                        data
                    });
                } else {
                    console.log('setState no se llamó');
                }

            });

    }, [url]); // lo de los [ es cuando cambia lo de dentro se ejecuta lo demas]

    return state;

}
