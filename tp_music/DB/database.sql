--
-- PostgreSQL database dump
--

-- Dumped from database version 11.2
-- Dumped by pg_dump version 11.2

-- Started on 2019-08-01 19:20:49

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 197 (class 1259 OID 16415)
-- Name: playlist; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.playlist (
    id integer NOT NULL,
    title character varying(100) NOT NULL,
    creation_date timestamp with time zone DEFAULT now()
);


ALTER TABLE public.playlist OWNER TO postgres;

--
-- TOC entry 196 (class 1259 OID 16413)
-- Name: playlist_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.playlist_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.playlist_id_seq OWNER TO postgres;

--
-- TOC entry 2829 (class 0 OID 0)
-- Dependencies: 196
-- Name: playlist_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.playlist_id_seq OWNED BY public.playlist.id;


--
-- TOC entry 199 (class 1259 OID 16424)
-- Name: track; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.track (
    id integer NOT NULL,
    playlist_id integer,
    title character varying(200) NOT NULL,
    uri character varying(100) NOT NULL,
    master_id integer NOT NULL
);


ALTER TABLE public.track OWNER TO postgres;

--
-- TOC entry 198 (class 1259 OID 16422)
-- Name: track_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.track_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.track_id_seq OWNER TO postgres;

--
-- TOC entry 2830 (class 0 OID 0)
-- Dependencies: 198
-- Name: track_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.track_id_seq OWNED BY public.track.id;


--
-- TOC entry 2691 (class 2604 OID 16418)
-- Name: playlist id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.playlist ALTER COLUMN id SET DEFAULT nextval('public.playlist_id_seq'::regclass);


--
-- TOC entry 2693 (class 2604 OID 16427)
-- Name: track id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.track ALTER COLUMN id SET DEFAULT nextval('public.track_id_seq'::regclass);


--
-- TOC entry 2821 (class 0 OID 16415)
-- Dependencies: 197
-- Data for Name: playlist; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.playlist (id, title, creation_date) FROM stdin;
1	Default	2019-05-12 21:55:21.09518-04
2	Acoustique	2019-05-12 21:55:21.09518-04
3	Classique	2019-05-12 21:55:21.09518-04
4	Country	2019-05-12 21:55:21.09518-04
5	Metal	2019-05-12 21:55:21.09518-04
6	Pop/Dance	2019-05-12 21:55:21.09518-04
7	Rock	2019-05-12 21:55:21.09518-04
\.


--
-- TOC entry 2823 (class 0 OID 16424)
-- Dependencies: 199
-- Data for Name: track; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.track (id, playlist_id, title, uri, master_id) FROM stdin;
20	1	Lady Gaga - Judas	https://www.youtube.com/watch?v=wagn8Wrmzuc	89769
23	1	Nicki Minaj - Did It On Em (Explicit)	https://www.youtube.com/watch?v=iKk94CzHz50	295002
24	1	Cardi B - Bodak Yellow [OFFICIAL MUSIC VIDEO]	https://www.youtube.com/watch?v=PEGccV-NOm8	1238535
25	1	RuPaul - Supermodel (You Better Work) (Official Music Video)	https://www.youtube.com/watch?v=Vw9LOrHU8JI	79881
30	5	Lady Gaga - The Edge Of Glory	https://www.youtube.com/watch?v=QeWBS0JBNzQ	338175
31	3	Lady Gaga - Yoü And I	https://www.youtube.com/watch?v=X9YMU0WeBwU	338175
32	1	Lady Gaga - Bad Romance	https://www.youtube.com/watch?v=qrO4YZeyl0I	201057
33	6	Lady Gaga - Marry The Night (Official Video)	https://www.youtube.com/watch?v=cggNqDAtJYU	338175
34	6	Lady Gaga - Born This Way	https://www.youtube.com/watch?v=wV1FrqwZyKw	338175
35	6	Lady Gaga - The Edge Of Glory	https://www.youtube.com/watch?v=QeWBS0JBNzQ	338175
36	7	Lady GaGa - Monster	https://www.youtube.com/watch?v=mP2srT6hh2Y	201057
37	7	Lady Gaga - Alejandro	https://www.youtube.com/watch?v=niqrrmev4mA	201057
38	7	Lady Gaga - Bad Romance	https://www.youtube.com/watch?v=qrO4YZeyl0I	201057
\.


--
-- TOC entry 2831 (class 0 OID 0)
-- Dependencies: 196
-- Name: playlist_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.playlist_id_seq', 7, true);


--
-- TOC entry 2832 (class 0 OID 0)
-- Dependencies: 198
-- Name: track_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.track_id_seq', 38, true);


--
-- TOC entry 2695 (class 2606 OID 16421)
-- Name: playlist playlist_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.playlist
    ADD CONSTRAINT playlist_pkey PRIMARY KEY (id);


--
-- TOC entry 2697 (class 2606 OID 16429)
-- Name: track track_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.track
    ADD CONSTRAINT track_pkey PRIMARY KEY (id);


--
-- TOC entry 2698 (class 2606 OID 16430)
-- Name: track track_playlist_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.track
    ADD CONSTRAINT track_playlist_id_fkey FOREIGN KEY (playlist_id) REFERENCES public.playlist(id);


-- Completed on 2019-08-01 19:20:49

--
-- PostgreSQL database dump complete
--

