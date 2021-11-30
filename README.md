## New relic

Estudos e scritps para NR

[!Vault](synthetics/vault)

* vault

Synthetic para standalone vault, checa o status code 200 e se "sealed" está como false


* vault_cluster

Synthetic para cluster vault, checa o status code 200 e 429 e se "sealed" está como false.

Status code vault:

200 if initialized, unsealed, and active
429 if unsealed and standby
472 if disaster recovery mode replication secondary and active
473 if performance standby
501 if not initialized
503 if sealed

[Documentação oficial do health check do vault](https://www.vaultproject.io/api/system/health)